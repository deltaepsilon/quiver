import { h } from 'preact';
import Button from 'preact-material-components/Button';

function SelectFilesTemplate({ changeView, setFiles }) {
  return state => {
    function handleButtonClick(e) {
      e.target.parentElement.querySelector('input').click();
    }

    function handleFileChange(e) {
      setFiles(e.target.files).then(() => changeView('upload-files'));
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
