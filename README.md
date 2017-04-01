#### Demo:
https://kubbafox.github.io/FlexTable/

#### Git:
https://github.com/kubbafox/FlexTable

![](http://i.imgur.com/29KdHRq.jpg)
### Features in Demo:
- Populate table HTML based on JSON
- Drag Name to switch row positions
- Drag & Drop columns 
- Click the name tag to review user profile pop-up
- Responsive
- Display drop zone (arrows) when dragging columns.
- Collapse the empty space during dragging.
- Cursors.
- Sorting on all columns.
- Search by name and dynamically display results during typing
<br><br>

### Feature(s) under development:
- Fixing known issues
<br><br>
### Feature(s)  in my mind:

- Click & Change a column to a heat-map. (Background colors will stick with cells when users are storing other columns)
<br><br>
### Known Issues:
- Could not fix table column header simply through CSS. Need some research for JS solutions.
- Sorting will break the row swap feature due to some hard code issues. The root cause has been defined and will be fixed tomorrow. 
<br></br>
- <s>Responsive Table Feature is not working on iPhone Chrome.</s>
- <s>Using jQuery .draggable to listen drag & drop events. Need re-write to pure javascript.</s>
- <s>Duplicate code in sorting & style changing logics. Need code refactoring once major features are completed.</s>
- <s>Not all HTML are generated from JS, which is causing a rendering issue when the table is loaded in the first time. Need move all HTML code to JS side.</s>
- <s>The first drag event breaks the page layout.</s>
- <s>The first drag event is not invoking transition properties</s>.
- <s>Lost hover affect after clicked the sort button</s>.
