## Technical details and overview
List of functions:<br />
• Drag and drop upload of an image
• Tap/click on image to put a tag
• Enter a note for each tag
• List of notes
• Highlight tag when note selected
• Highlight note when tag clicked
Purpose of this small project is to verify HTML markup skills and knowledge of preferred JS. Everything except listed functions are just dummy HTML components without any logic behind.
List of blocks:<br />
Left Menu - is a dummy component which should allow to change selected element.
Header - only actionable area is a file uploading component. Search input and Log in button are dummy plugs.
Image Area - if image is uploaded to a page it should become clickable. Upon click on the image user should see a pop-up with a textarea where he can enter some text. Pop-up has two options: Ok, Cancel. If user cancels this action, then pop-up should disappear. In case of Ok action, tag should appear in place of original click on the image and note should be added to list of notes. At this moment just added tag and note should become highlighted. Later on by clicking on tags related note should become highlighted.
List of Notes - that is a plain list of notes added to an image. By selecting a note related tag should become highlighted. Toggle on the top of a list (Latest vs All) is a dummy plug.
General comment: in case of uploading of new image, all tags and notes should be removed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />


