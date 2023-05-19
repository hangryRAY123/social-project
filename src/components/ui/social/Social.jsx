import Facebook from '../../../img/facebook.svg';
import Twitter from '../../../img/twitter.svg';
import Instagram from '../../../img/instagram.svg';
import Vkontakte from '../../../img/vk.svg';
import { StyledList, StyledItem } from './styles';

export const Social = ({ contacts }) => {
  return (
    <StyledList>
      <StyledItem>
        <a href={`https://${contacts.facebook}`}>
          <img
            src={Facebook}
            width="7"
            height="14"
            alt="Facebook."
          />
          <span className="visually-hidden">Facebook.</span>
        </a>
      </StyledItem>
      <StyledItem>
        <a href={`https://${contacts.twitter}`}>
          <img
            src={Twitter}
            width="14"
            height="11"
            alt="Twitter."
          />
          <span className="visually-hidden">Twitter.</span>
        </a>
      </StyledItem>
      <StyledItem>
        <a href={`https://${contacts.instagram}`}>
          <img
            src={Instagram}
            width="14"
            height="14"
            alt="Instagram."
          />
          <span className="visually-hidden">
            Instagram.
          </span>
        </a>
      </StyledItem>
      <StyledItem>
        <a href={`https://${contacts.vk}`}>
          <img
            src={Vkontakte}
            width="14"
            height="14"
            alt="Vkontakte."
          />
          <span className="visually-hidden">Linkedin.</span>
        </a>
      </StyledItem>
    </StyledList>
  );
};
