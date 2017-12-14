import { h } from 'preact';
import Button from 'preact-material-components/Button';

function SelectFilesTemplate({ changeView, setFiles }) {
  return props => {
    function handleButtonClick(e) {
      e.target.parentElement.querySelector('input').click();
    }

    function handleFileChange(e) {
      const mimeTypes = props['mime-types'] || '';
      const mimeTypesSet = new Set(mimeTypes.split(',').filter(x => !!x));
      const files = Array.from(e.target.files).filter(
        ({ type }) => !mimeTypesSet.size || mimeTypesSet.has(type)
      );

      setFiles(files).then(() => changeView('upload-files'));
    }

    return (
      <div>
        <input
          style="display: none;"
          type="file"
          id="file-input"
          multiple
          onChange={handleFileChange}
        />
        <Button ripple raised onClick={handleButtonClick}>
          Select Files
        </Button>
      </div>
    );
  };
}

export { SelectFilesTemplate };
