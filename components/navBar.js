import React, { useState } from "react";
import styles from "./navBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(search);
      const encodedSearch = encodeURI(search);
      const res = await fetch(
        `${process.env.API_PATH}/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${encodedSearch}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.movie}>
            <Image
              src="/PMDb.png"
              alt="Website main brand"
              height={48}
              width={72}
            />
          </a>
        </Link>
        <button className={styles.menu} type="button">
          <Image src="/menuIcon.png" alt="Menu Icon" width={24} height={24} />
        </button>
        <form name="searchForm" onSubmit={handleSearchSubmit}>
          <div className={styles.search}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.inputSearch}
              type="search"
              id="search"
              placeholder="Search for something..."
            ></input>
            {search === "" ? (
              <div className={styles.inputSearchIcon}>
                <Image
                  src="/searchIcon.png"
                  alt="Search Icon"
                  height={24}
                  width={24}
                />
              </div>
            ) : null}
          </div>
          <input type="submit" hidden></input>
        </form>
      </div>
    </div>
  );
}
