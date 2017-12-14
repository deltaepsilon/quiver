import { h } from 'preact';
import GridList from 'preact-material-components/GridList';
import attachmentSvg from '../assets/svg/attachment.svg'

export default ({ file }) => {
  const { name, bytesTransferred, size, type, result, isImage } = file;
  const percentage = Math.round((file.bytesTransferred || 0) / file.size * 100);

  return (
    <GridList.Tile>
      <GridList.PrimaryTile>
        <GridList.PrimaryContentTile src={(isImage && result) || attachmentSvg} />
        <div class="percentage" style={`width: ${percentage}%;`}></div>
      </GridList.PrimaryTile>
      <GridList.SecondaryTile>
        <GridList.TitleTile>{name}</GridList.TitleTile>
        <GridList.SupportTextTile>{Math.round(size / 1000 * 100) / 100}kb</GridList.SupportTextTile>
      </GridList.SecondaryTile>
    </GridList.Tile>
  );
};
