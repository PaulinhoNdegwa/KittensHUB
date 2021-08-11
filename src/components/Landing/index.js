import React, { Component } from 'react';
import profile from '../../assets/images/myimage.jpg';
import users from '../../assets/mock-data/data';

import './style.css';

class Landing extends Component {
    state = {
        stories: users
    }

    renderStories = stories => {
        return stories.map(story => {
            return (
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-red-800 p-1 rounded-full">
                        <a className="block bg-white rounded-full p-1 transform transition hover:-rotate-6" href="#">
                            <img className="h-12 w-12 sm:h-24 sm:w-24 rounded-full max-w-full story-image" src={story.photo} alt="Cute Kitten" />
                        </a>
                    </div>
                    <a className="text-xs font-medium sm:text-base text-black" href="#">{story.name}</a>
                </li>
            )
        })
    }
    render() {
        const { stories } = this.state;
        return (
            <div className="max-w-2xl mx-auto p-4 sm:p-8">
                <h2 className="sm:text-lg sm:leading-snug font-semibold uppercase text-red-800">Introducing...🥁</h2>
                <p className="text-lg sm:text-sm lg:text-xl leading-none font-extrabold text-gray-900">Kittens HUB</p>

                <hr className="mt-4" />
                <ul className="flex sm:pl-8 space-x-2 sm:space-x-6 mt-4 mx-auto overflow-x-auto">
                    <li className="flex flex-col items-center space-y-1">
                        <div className="relative bg-gradient-to-tr from-yellow-400 to-red-800 p-1 rounded-full">
                            <a className="block bg-white rounded-full p-1 transform transition hover:-rotate-6" href="#">
                                <img className="h-12 w-12 sm:h-24 sm:w-24 rounded-full max-w-full story-image" src={profile} alt="Cute Kitten" />
                            </a>
                            <button class="absolute bottom-1 right-1 bg-blue-500 h-7 w-7 rounded-full text-white text-xl border-4 border-white flex justify-center items-center font-mono hover:bg-blue-600">+</button>
                        </div>
                        <a className="text-xs font-medium sm:text-base text-black" href="#">You</a>
                    </li>
                    {this.renderStories(stories)}
                </ul>
            </div>
        );
    }
}

export default Landing;