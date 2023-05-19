import preloader from '../../../img/preloader.svg';
import { StyledImg } from './styles';

export const Preloader = ({ width, height, mR }) => {
  return (
    <StyledImg
      $width={width}
      $height={height}
      $mR={mR}
      src={preloader}
      alt="Preloader."
    />
  );
};
