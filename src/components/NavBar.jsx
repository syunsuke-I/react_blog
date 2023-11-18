import React from "react"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faFilePen,faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({isAuth}) => {
  return (
    <nav class="flex justify-center items-center bg-sky-100 space-x-4 lg:space-x-8">
      <Link to="/" class="hover:text-white focus:bg-sky-200 focus:text-white focus:outline-none focus:ring-2 focus:bg-sky-200 active:bg-blue-700 active:text-yellow-300">
        <FontAwesomeIcon icon={faHouse} className="mr-2"/>
        ホーム
      </Link>
      <Link to="/createpost" class="hover:text-white focus:bg-sky-200 focus:text-white focus:outline-none focus:ring-2 focus:bg-sky-200 active:bg-blue-700 active:text-yellow-300">
        <FontAwesomeIcon icon={faFilePen} className="mr-2"/>
        記事投稿
      </Link>
      {!isAuth ?
      (
        <Link to="/login" class="hover:text-white focus:bg-sky-200 focus:text-white focus:outline-none focus:ring-2 focus:bg-sky-200 active:bg-blue-700 active:text-yellow-300">
        <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-2"/>
          ログイン
        </Link>
      )
      :
      (
        <Link to="/logout" class="hover:text-white focus:bg-sky-200 focus:text-white focus:outline-none focus:ring-2 focus:bg-sky-200 active:bg-blue-700 active:text-yellow-300">
        <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-2"/>
          ログアウト
        </Link>
      )}
    </nav>
  )
};

export default NavBar;