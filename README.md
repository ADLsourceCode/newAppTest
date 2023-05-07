# React Native News App

This is a news app built with React Native that allows users to browse news articles from various sources based on selected topics. The app uses the News API to fetch the latest news articles and displays them in a user-friendly format. The app also comes with some additional features such as a color palette generator and support for multiple languages.

## Getting Started

- Node 16 or greater is required. Development for iOS requires a Mac and Xcode 13 or up.
- You also need to install the dependencies required by React Native.
- Go to the React Native environment setup, then select React Native CLI Quickstart tab.Follow instructions for your given development OS and target OS.


## Steps

1. Clone this repository to your local machine using git clone.
2. Install the app's dependencies by running npm install.
3. Create an account on the News API website to obtain an API key.
4. Create a .env file in the root directory of the project and add your API key as follows:

    ` NEWS_API_KEY=<your_api_key_here> `

5. `npx react-native run-ios` / `npx react-native run-android` to run the platform application (remember to start a simulator or connect a device)


The following resources were used in the development of this app:

1. Color Palette Generator - https://coolors.co/eee2df-eed7c5-c89f9c-c97c5d-b36a5e

## Final Output
1. Walkthrough Video of the Project - https://drive.google.com/file/d/1rjvMdpdgEOKgKmoy_JTEQla6c7NuA66D/view?usp=sharing




## API Usage

The app uses the News API to fetch news articles. The following endpoint is used:

`Endpoint: https://newsapi.org/docs/endpoints/everything`

