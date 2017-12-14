import { h } from 'preact';
import GridList from 'preact-material-components/GridList';

export default ({ file }) => {
  const { name, bytesTransferred, size, type, result, isImage } = file;
  const percentage = Math.round((file.bytesTransferred || 0) / file.size * 100);

  return (
    <GridList.Tile>
      <GridList.PrimaryTile>
        <GridList.PrimaryContentTile src={(isImage && result) || 'assets/svg/attachment.svg'} />
        <div class="percentage">{!!percentage && percentage + '%'}</div>
      </GridList.PrimaryTile>
      <GridList.SecondaryTile>
        <GridList.TitleTile>{name}</GridList.TitleTile>
        <GridList.SupportTextTile>{Math.round(size / 1000 * 100) / 100}kb</GridList.SupportTextTile>
      </GridList.SecondaryTile>
    </GridList.Tile>
  );
};
