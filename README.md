# Personal Website/Portfolio

1. Created using React.js application launched with NextJS for static website
2. Demonstrating HTML/CSS and JavaScript skills
3. Experimenting with front-end SWE and UI/UX considerations, along with accessibility issues

<p align="center">
  <img src="public/static/genImages/3-color-trace.png" alt="Profile Image" />
</p>

## Notes:
  - flexbox: calhacks.org/flexbox
  - material design, bootstrap, css tricks, mdn web docs
  - stackoverflow, hackerrank, spotify
  - CALHACKS
  - dailycal
  - more personal type things: instagram, facebook, profiles and hobbies and spotify -- can add api calls here

## Recently changed:
  - Git and LOC calls
  - Finalize design ideas, modify @styles, nav, welcome, intro, contactme, and footer toward that end
  - blogs/projects pages created for in-depth details
  - standardized (global) styles

## Yet to-do:
  - Fixup content and project boxes
  - colors: https://graf1x.com/shades-of-blue-color-palette/ (want to sleek this ish up)
  - progress bars, trees, timeline, social media display
  - Think of portfolio and info layouts + act on it
  - Lazy loading: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/, https://css-tricks.com/snippets/javascript/lazy-loading-images/, https://css-tricks.com/tips-for-rolling-your-own-lazy-loading/, https://medium.com/@rossbulat/lazy-image-loading-in-react-the-full-breakdown-4026619de2df

  - Get color palette and apply
  - Pre-loading for Git and LOC calls: https://nextjs.org/docs/basic-features/data-fetching##getstaticprops-static-generation, https://nextjs.org/docs/basic-features/data-fetching##getserversideprops-server-side-rendering

  - Animation gif for loading screen
  - Accessibility
  - Dockerize? https://medium.com/swlh/dockerize-your-next-js-application-91ade32baa6

## Main to-dos:
  - Make compatible with different media
  - See if necessary to incorporate react-dom, react-router, react bootstrap, etc.
  - Javascript and Ajax scripts
  - Add in Github, Spotify, Youtube, and Instagram API calls (figure out how to let api call load before assigning text) https://developer.spotify.com/documentation/widgets/guides/adding-a-spotify-play-button/, spotify widgets or web playback sdk
  - Theming: Light/Dark
  - Page loader
  - Lazy loading
  - Accessibility
  - Blog section
  - Other parts of portfolio
  - Parallax -- https://www.w3schools.com/howto/howto_css_parallax.asp

## Updating project:
  1. Launch via CLI (build/ship):
    * npm run build
    * npm run export
    * cd out
    * serve -p 8080
  2. Launch dev:
    - npm run dev
  3. Running into node module issues on build -- if solving takes too long do:
    * npm uninstall
    * delete .next
    * delete node_modules
    * delete package_lock.json
    * npm install
    * launch the application

## Specifications:
  - paths created in next.config.js
  - @folder paths created in jsconfig
  - ignoring ai files for conciseness
  - api calls and passing data from parent/child through various methods like usestate/useeffect or getstaticprops or initialprops
  - avoided annoying jsx with styled-components instead, easier to abstract

## Resources:
  - bchiang7/v4
  - w3schools
  - css-tricks
  - nextjs and react docs
