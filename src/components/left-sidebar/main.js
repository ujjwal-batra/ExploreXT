import logo from "../../assets/logo.png"
import folder_logo from "../../assets/folder-closed.png"

function Main(props) {

  var directory = require('../../directory.json');
  
  var Recursive = (folder) => {

    const onClickFolder = (e, path) => {
      props.setFiles(e);
      props.setPath(path);
      console.log(path)
    };

    if(folder.name.length == 0)
      return null
    return (
      
      <ul className="left-sidebar_directory__folder">
        {Object.keys(folder.name).map((e) => 
              <li>
                { e != "files" ? 
                    <div>
                      <div className="directory_folder__div" onClick={() => onClickFolder(folder.name[e].files, folder.path+"/"+e)}>
                        <div><img src={folder_logo} width="16px" alt="folder-icon" /></div>
                        <div className="directory_folder__name">{e}</div>
                      </div>
                      <Recursive name={folder.name[e]} path={folder.path+"/"+e}  />
                    </div>
        
                  : <div className="extra_div"></div>
                }
              </li>
            )

          }
      </ul>
    )
  }

  return (
    <div className="left-sidebar main">
      <header className="left-sidebar_header">
          <div className="left-sidebar_logo"><img src={logo} width="30px" alt="logo" /></div>
          <div className="left-sidebar_company">ExploreXT</div>
      </header>

      <div className="left-sidebar_directory">
        <Recursive name={directory} path=""/>
      </div>
      
      {/* <footer>
        <button onClick={() => onClickLock()}>Lock</button>
      </footer> */}
    </div>
  );
}

export default Main;
