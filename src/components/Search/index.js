import React, { Component } from 'react';
import profile from '../../assets/images/myimage.jpg'
import users from '../../assets/mock-data/data';

class Search extends Component {
    state = {
        photos: users
    }

    renderFeed = (photos) => {
        return photos.map(photo => {
            return (
                <div class="flex flex-col items-start border-4 w-full p-1 space-y-2">
                    <div class="flex p-1 my-1">
                        <img class="ml-4 h-8 w-8 rounded-full" src={photo.photo} alt="Profile Pic" />
                        <span class="ml-2 font-semibold my-0">{photo.name}</span>
                    </div>
                    <img class="w-full h-80" src={photo.photo} alt="New Upload" />
                    <div class="flex p-1">
                        <span class="text-gray-900 mr-2 font-medium">12 Likes</span><span class="text-gray-900 mr-2 font-medium">0 Comments</span>
                    </div>
                    <p class="font-light mx-2">{photo.caption || "No 🧢"}</p>
                    <hr />
                </div>
            )
        })
    }
    render() {
        const { photos } = this.state;
        return (
            <div class="max-w-xl mx-auto flex flex-col p-1 shadow-lg">
                {this.renderFeed(photos)}
            </div>
        );
    }
}

export default Search;