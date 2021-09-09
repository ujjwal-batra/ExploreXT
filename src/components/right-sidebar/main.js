import React, { useState, useEffect } from "react";

import file_logo from "../../assets/document.png"
import PopUp from "../right-sidebar/file_select_popup"

function Main(props) {

  const [active, setActive] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const onClickFile = (e) => {
    setSelected(e);
    setActive(true)
  };

  return (
    <div className="right-sidebar main">
      <header className="right-sidebar_header">
          <span className="right-sidebar_header__dir">{props.path}</span>
          <span className="right-sidebar_header__search">
            <div class="searchBar">
              <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search.." value="" />
              <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                <svg viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </button>
            </div>
          </span>
          <span></span>
      </header>
      <hr />
      <div className="right-sidebar_files">
        {props.files && props.files.map((e) => {
            return (
              <div className="file__card" onClick={() => onClickFile(e)}>
                <img src={file_logo} width="100px"/>
                <div>{e}</div>
              </div>
            )
        })}
      </div>

      <PopUp isActive={active} selected={selected} setSelected={setSelected} setActive={setActive} />
      
    </div>
  );
}

export default Main;
