import { h } from 'preact';
import GridList from 'preact-material-components/GridList';

export default ({ file }) => {
  const { name, size, type, result } = file;
  
  return (
    <GridList.Tile>
      <GridList.PrimaryTile>
        <GridList.PrimaryContentTile src={result} />
      </GridList.PrimaryTile>
      <GridList.SecondaryTile>
        <GridList.TitleTile>{name}</GridList.TitleTile>
        <GridList.SupportTextTile>{Math.round(size/1000 * 100) / 100}kb</GridList.SupportTextTile>
      </GridList.SecondaryTile>
    </GridList.Tile>
  );
};
