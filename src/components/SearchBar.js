// Styles
import "./SearchBar.css"

// React
import React, { useState, useRef, useEffect } from 'react'

const SearchBar = ({ searchValueOnMockedData }) => {

  // store input value
  const [searchValue, setSearchValue] = useState("")
  const searchInputRef = useRef(null)

  // simulate a loading effect
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    searchValue.length > 0 && setLoading(true)
    searchValue.length === 0 && setLoading(false)
    const time = 2000
    searchValue.length >= 1 && setTimeout(() => setLoading(false), time)
  }, [searchValue])

  // store search results
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => setSearchResult(searchValueOnMockedData(searchValue)), [searchValue])

  // controls active filter option
  const filterOptions = [
    { name: "all" },
    { name: "file" },
    { name: "user" },
    { name: "chat" },
    { name: "list" }
  ]

  const [filterOption, setFilterOption] = useState(filterOptions[0].name)

  useEffect(() => setFilterOption(filterOptions[0].name), [searchValue])

  // filter settings
  const [isFilterSettingsOpen, setIsFilterSettingsOpen] = useState(false)
  const changeMenuStatus = () => isFilterSettingsOpen === true ? setIsFilterSettingsOpen(false) : setIsFilterSettingsOpen(true);

  const [showFiles, setShowFiles] = useState(true)
  const changeFilesDisplay = () => showFiles === true ? setShowFiles(false) : setShowFiles(true);
  const [showPeople, setShowPeople] = useState(true)
  const changePeopleDisplay = () => showPeople === true ? setShowPeople(false) : setShowPeople(true);
  const [showChats, setShowChats] = useState(false)
  const changeChatsDisplay = () => showChats === true ? setShowChats(false) : setShowChats(true);
  const [showLists, setShowLists] = useState(false)
  const changeListsDisplay = () => showLists === true ? setShowLists(false) : setShowLists(true);

  // focus the search input when "S" is pressed
  const keyEvent = (e) => {
    if (e.key.toLowerCase() === "s") {
      searchInputRef.current !== document.activeElement &&
        searchInputRef.current.focus()
    }
  }

  useEffect(() => window.addEventListener("keyup", keyEvent), [searchInputRef])

  // set a class based on the user status
  const setUserStatus = (e) => {
    if (e.status === "online")
      return "status onlineStatus"
    else if (e.status === "away")
      return "status awayStatus"
    else
      return "status"
  }

  // Highlight search results
  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> {parts.map((part, i) =>
      <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: '#FBCEB1' } : {}}>
        {part}
      </span>)
    } </span>;
  }


  return (
    <div className="searchBar" style={searchValue.length > 0 ? { height: '530px' } : {}}>
      <div className="searchInputArea">
        {loading === false && <img src="/Search.svg" alt="search" width={18} />}
        {loading === true && <div className="spinner"></div>}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Searching is easier"
          spellCheck="false"
          ref={searchInputRef}
        />

        {searchValue !== "" ? (
          <p onClick={() => setSearchValue("")} className="clearBtn">Clear</p>
        ) : (
          <div className="quickAcess">
            <span>S</span>
            <p onClick={() => setSearchValue("")}>quick acess</p>
          </div>
        )}
      </div>

      {/* shows filters and results if any value was inserted on input */}
      {searchValue.length > 0 &&
        <>
          {/* filters */}
          <div className="searchFilters">
            <ul className="filters">
              <li>
                <p className={filterOption === "all" ? "selectedFilterBorder" : "filterDisabled"}
                  onClick={() => setFilterOption(filterOptions[0].name)}>
                  All <span>{loading === true ? 0 : searchResult.length}</span>
                </p>
              </li>

              {showFiles === true &&
                <li>
                  <p className={filterOption === "file" ? "selectedFilterBorder" : "filterDisabled"} onClick={() => setFilterOption(filterOptions[1].name)}>
                    <img src="/Clips.svg" width={13} />
                    Files <span>{loading === true ? 0 : searchResult.filter((e) => e.type === "file").length}</span>
                  </p>
                </li>
              }

              {showPeople === true &&
                <li>
                  <p className={filterOption === "user" ? "selectedFilterBorder" : "filterDisabled"}
                    onClick={() => setFilterOption(filterOptions[2].name)}>
                    <img
                      src="/People.svg"
                      width={13}
                    />
                    People <span>{loading === true ? 0 : searchResult.filter((e) => e.type === "user").length}</span>
                  </p>
                </li>
              }

              {showChats === true &&
                <li>
                  <p className={filterOption === "chat" ? "selectedFilterBorder" : "filterDisabled"}
                    onClick={() => setFilterOption(filterOptions[3].name)}>
                    <img
                      src="/Chats.svg"
                      width={13}
                    />
                    Chats <span>{loading === true ? 0 : searchResult.filter((e) => e.type === "chat").length}</span>
                  </p>
                </li>
              }

              {showLists === true &&
                <li>
                  <p className={filterOption === "list" ? "selectedFilterBorder" : "filterDisabled"}
                    onClick={() => setFilterOption(filterOptions[4].name)}>
                    <img
                      src="/Lists.png"
                      width={13}
                    />
                    Lists <span>{loading === true ? 0 : searchResult.filter((e) => e.type === "list").length}</span>
                  </p>
                </li>
              }
            </ul>

            <span className="filterSettings">
              <img
                src="/Setting.png"
                width={16}
                style={isFilterSettingsOpen === true ? { transform: 'rotate(50deg)' } : {}}
                onClick={changeMenuStatus}
              />

              {isFilterSettingsOpen === true &&
                <div className="settingsMenu">
                  <p onClick={changeFilesDisplay}>
                    <span>
                      <img src="/Clips.svg" width={13} />
                      Files
                    </span>
                    <span className={showFiles === true ? "checkButton active" : "checkButton"}>
                      <span></span>
                    </span>
                  </p>

                  <p onClick={changePeopleDisplay}>
                    <span>
                      <img src="/People.svg" width={13} />
                      People
                    </span>
                    <span className={showPeople === true ? "checkButton active" : "checkButton"}>
                      <span></span>
                    </span>
                  </p>

                  <p onClick={changeChatsDisplay}>
                    <span>
                      <img src="/Chats.svg" width={13} />
                      Chats
                    </span>
                    <span className={showChats === true ? "checkButton active" : "checkButton"}>
                      <span></span>
                    </span>
                  </p>

                  <p onClick={changeListsDisplay}>
                    <span>
                      <img src="/Lists.png" width={13} />
                      Lists
                    </span>
                    <span className={showLists === true ? "checkButton active" : "checkButton"}>
                      <span></span>
                    </span>
                  </p>
                </div>
              }
            </span>
          </div>

          <div className="searchResults">
            {/* blank results */}
            {loading === true &&
              <>
                <span className="blankResult loadingAnimation">
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </span>

                <span className="blankResult loadingAnimation">
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </span>

                <span className="blankResult loadingAnimation">
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </span>

                <span className="blankResult loadingAnimation">
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </span>

                <span className="blankResult loadingAnimation">
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </span>

                <span className="blankResult loadingAnimation">
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </span>
              </>

            }

            {/* search results */}
            {searchValue.length >= 0 &&
              loading === false &&
              <ul className="dataResult" >
                {searchResult.filter(e => filterOption === "all" ? e : e.type === filterOption).map((e) => (
                  <li key={e.id}>
                    <div>
                      <img src={e.imgSrc} className="resultImage" />
                      {e.type === "user" && <span className={setUserStatus(e)}></span>}
                    </div>

                    <div className="descriptionBox">
                      <div className="resultDescription">
                        <h3>{highlightText(e.name, searchValue)}</h3>
                        <span>
                          {e.type === "user" && <p>{e.lastLogin}</p>}
                          {e.type === "file" && <p>in {e.folder} &#8231; {e.lastUpdate}</p>}
                        </span>
                      </div>

                      <div className="resultOption">
                        <div className="copyLinkBox" onClick={() => navigator.clipboard.writeText(e.link)}>
                          <img src="/CopyLink.svg" width={15} />
                          <span className="tooltip">Copy Link</span>
                        </div>
                        <div className="newTabBox" onClick={() => window.open(e.link)}>
                          <img src="/NewTab.svg" width={15} />
                          <p>New tab</p>
                        </div>
                      </div>
                    </div>

                  </li>
                ))}
                {searchResult.length === 0 &&
                  <li className="noResults">
                    <p>No results found</p>
                  </li>}
              </ul>

            }

          </div>
        </>
      }
    </div>
  )
}

export default SearchBar