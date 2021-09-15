import closePopupIcon from '../image/close.svg'

function PopupWithForm(props) {
  return (
    <div className={`popup popup__${props.name} ${props.isOpen && 'popup_is-opened'}`}>
      <div className="popup__content">
        <img
          onClick={props.onClose}
          src={closePopupIcon}
          alt="закрыть попап"
          className={`popup__close popup__close-${props.name}`}
        />
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
          {props.containerInput}
          <button className={`popup__button popup__button-${props.name} ${!props.buttonDisabled && 'button__disabled'}`}>
            {props.nameButton}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;