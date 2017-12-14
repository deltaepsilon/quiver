import { h } from 'preact';
import Button from 'preact-material-components/Button';
import GridList from 'preact-material-components/GridList';
import UploadTile from '../components/uploadTile.component';

function UploadFilesTemplate({ fire, changeView, storageService }) {
  return ({ folder }, { files }) => {
    const tiles = Array.from(files).map(file => <UploadTile file={file} />);

    function handleButtonClick() {
      storageService.upload(folder, files.map(x => x.source)).subscribe(
        ({ file, task, snapshot }) => {
          if (file || task) {
            fire('storageUploaderTask', { file, task });
          } else {
            fire('storageUploaderSnapshot', { snapshot });
          }
        },
        error => fire('storageUploaderError', { error }),
        () => fire('storageUploaderComplete')
      );
    }

    return (
      <div>
        <div class="buttons">
          <Button ripple back onClick={() => changeView('select-files')}>
            Back
          </Button>
          <Button ripple raised onClick={handleButtonClick}>
            Upload Files
          </Button>
        </div>

        <GridList
          header-caption={true}
          with-icon-align="end"
          twoline-caption={true}
          tile-gutter-1={false}
          tile-aspect="16x9"
        >
          <GridList.Tiles>{tiles}</GridList.Tiles>
        </GridList>
      </div>
    );
  };
}

export { UploadFilesTemplate };
