Things I'd change in the project:
Starting from folders in src, top to bottom
Components:
    Input: make placeholder variable
    Table: make table data agnostic, it should only care about layout
        - provide 2 methods, as props, to render the header and rows
        - this way, i'd only have the 2 methods as props
        - possibly create a wrapper for TableCell component
pages/Users/index
    - move getUsers method along with the endpoint into src/services/getUsers.ts
    - make a custom hook, useUsers, for reusability
    - provide a Loading and Error component
    - move UsersTable into src/pages/Users/components
pages/Users/UsersTable
    - move the contains method into src/utils/filter
    - rename to cellContainsStr
    - add visual indication of the sort
    - expand functionality to do asc/desc/initial
    - add sort for all columns
    - fix TS for sort
src/App
    - create an additional layer, something like AppInner
        to handle client routing and additional app specific logic
    - remove unused files leftover from create-react-app