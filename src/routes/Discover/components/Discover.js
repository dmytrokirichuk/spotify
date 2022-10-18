import React, { Component } from "react";

import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import ApiService from "../../../api/ApiService";

import "../styles/_discover.scss";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount() {
    Promise.all([
      ApiService.fetchNewReleases(),
      ApiService.fetchCategories(),
      ApiService.fetchPlaylists(),
    ]).then(([albums, categories, playlists]) => {
      this.setState({
        newReleases: albums.items,
        categories: categories.items,
        playlists: playlists.items,
      });
    });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
