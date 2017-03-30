### Demo:
https://kubbafox.github.io/FlexTable/


### Features in Demo:
- Populate table HTML based on JSON
- Drag Name to switch row positions
- Drag & Drop columns 
- Click the name tag to review user profile pop-up
- Responsive
- Display Drop Zone (Arrows) when it is dragging.
- Collapse the empty space during dragging.
- Cursors.
- Sorting By Name (A-Z, Z-A, Get back to original). 
<br><br>
### Feature(s) in development:

- Search by name (Dynamically remove or display results during typing)
<br><br>

### Feature(s)  in my mind:

- Click & Change a column to a heat-map. (Background colors will stick with cells when users are storing other columns)
<br><br>
### Known Issues:
- <s>Responsive Table Feature is not working on iPhone Chrome.</s>
- Using jQuery .draggable to listen drag & drop events. Need re-write to pure javascript.
- Could not fix table column header simply through CSS. Need some research for JS solutions.
- Duplicate code in sorting & style changing logics. Need code refactoring once major features are completed.
- <s>Not all HTML are generated from JS, which is causing a rendering issue when the table is loaded in the first time. Need move all HTML code to JS side.</s>
- <s>The first drag event breaks the page layout.</s>
- The first drag event is not invoking transition properties.
- Lost hover affect after clicked the sort button.
