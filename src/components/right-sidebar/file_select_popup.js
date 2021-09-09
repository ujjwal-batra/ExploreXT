function Popup(props) {

    const onClickClose = () => {
        props.setSelected("");
        props.setActive(false)
    };

    if(props.isActive == false)
        return null;
    return (
        <div className="change_popup">
            <div className="change_popup__card">
                <div className="change_popup__card-flex">
                    <div className="popup_card__heading">
                        <span className="popup_card_file">{props.selected}</span>
                        <span className="popup_card__close" onClick={() => onClickClose()}>X</span>
                    </div>
                    <div className="popup_card__input-container">
                        <input className="popup_card__input" type="text"></input>
                    </div>
                    <div className="popup_card__submit">
                        <button>Save file</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Popup;
