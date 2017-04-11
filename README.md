#### Demo:
https://kubbafox.github.io/FlexTable/

#### Git:
https://github.com/kubbafox/FlexTable

![](http://i.imgur.com/29KdHRq.jpg)
### Features in Demo:
- Using JSON, object, and array to populate table
- Search by username
- Sort by any column
- Drag & Drop any column or row
- Click user name to expand a popup
- Responsive for mobile
- Pure Javascript solution
<br><br>

### Feature(s) under development:
- Fixing known issues
<br><br>
### Upcoming Features
- When the table is very long vertically (many records), part of the table will shrink
- Sticky headers; when the user scrolls, fix the header row at the top of the window so that the user can see the label for each column.
- Please request more features or report any issues.
<br><br>
### Known Issues:
- Drag Row feature is not working in Firefox.
- Could not fix table column evo_c-divtable-header simply through CSS. Need some research for JS solutions.
<br></br>
- <s>Sorting will break the evo_c-divtable-row swap feature due to some hard code issues. The root cause has been defined and will be fixed tomorrow.</s>
- <s>Responsive Table Feature is not working on iPhone Chrome.</s>
- <s>Using jQuery .draggable to listen drag & drop events. Need re-write to pure javascript.</s>
- <s>Duplicate code in sorting & style changing logics. Need code refactoring once major features are completed.</s>
- <s>Not all HTML are generated from JS, which is causing a rendering issue when the table is loaded in the first time. Need move all HTML code to JS side.</s>
- <s>The first drag event breaks the page layout.</s>
- <s>The first drag event is not invoking transition properties</s>.
- <s>Lost hover affect after clicked the sort button</s>.
