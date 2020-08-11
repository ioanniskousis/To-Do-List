const project1 = {
  id: 4,
  title: 'RESTAURANT PAGE',
  description: 'Practicing DOM manipulation by dynamically rendering a simple restaurant homepage!',
  dateCreated: 1597171696844,
  priority: 1,
};

const project2 = {
  id: 1,
  title: 'Tic-Tac-Toe',
  description: 'The traditional Chinese game with JavaScript',
  dateCreated: 1597162679453,
  priority: 0,
};

const project3 = {
  id: 2,
  title: 'Librarian',
  description: 'A small library where users can add books and check those they have read',
  dateCreated: 1597162647533,
  priority: 0,
};

const project4 = {
  id: 3,
  title: 'New Project',
  description: '',
  dateCreated: 1597161168434,
  priority: -1,
};

const todo1 = {
  checklist: [
    { description: 'Check Item 1', check: true, order: 0 },
    { description: 'Check Item 2', check: true, order: 1 },
    { description: 'Check Item 3', check: true, order: 2 },
    { description: 'Check Item 4', check: false, order: 3 },
    { description: 'Check Item 5', check: false, order: 4 },
  ],
  complete: true,
  description: '',
  dueDate: null,
  id: 1,
  notes: 'npm run build↵npx webpack --watch',
  priority: '2',
  projectId: 1,
  title: 'install web pack',
};

const todo2 = {
  checklist: [
    { description: 'ADD .github/workflows/linters.yml', check: true, order: 0 },
    { description: 'ADD # .gitignore node_modules/', check: true, order: 1 },
    { description: 'ESLint npm install npm -g', check: false, order: 2 },
    { description: 'npm init', check: false, order: 3 },
    { description: 'npm install --save-dev eslint@6.8.x eslint-config-airbnb-base@14.1.x eslint-plugin-import@2.20.x', check: false, order: 4 },
  ],
  complete: true,
  description: '',
  dueDate: 1597093200000,
  id: 2,
  notes: '- npm install --save-dev eslint@6.8.x eslint-config-airbnb-base@14.1.x eslint-plugin-import@2.20.x',
  priority: '3',
  projectId: 1,
  title: 'instal linters',
};

const todo3 = {
  checklist: [],
  complete: true,
  description: '',
  dueDate: 1597093200000,
  id: 3,
  notes: '',
  priority: '4',
  projectId: 3,
  title: 'Task 1',
};

const todo4 = {
  checklist: [],
  complete: false,
  description: '',
  dueDate: 1597179600000,
  id: 4,
  notes: '',
  priority: '2',
  projectId: 3,
  title: 'Task 2',
};

const todo5 = {
  checklist: [],
  complete: true,
  description: '',
  dueDate: 1597525200000,
  id: 5,
  notes: '',
  priority: '1',
  projectId: 3,
  title: 'Task 3',
};

const todo6 = {
  checklist: [],
  complete: true,
  description: 'to run checking',
  dueDate: 1597093200000,
  id: 6,
  notes: 'npx eslint .',
  priority: '0',
  projectId: 1,
  title: 'ESLint',
};

const todo7 = {
  checklist: [
    { description: 'npx stylelint \'**/*.{css,scss}\'', check: false, order: 0 },
  ],
  complete: true,
  description: '',
  dueDate: 1597093200000,
  id: 7,
  notes: 'npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator',
  priority: '1',
  projectId: 1,
  title: 'Stylelint install',
};

const todo8 = {
  checklist: [],
  complete: false,
  description: '',
  dueDate: 1597093200000,
  id: 8,
  notes: '',
  priority: '0',
  projectId: 2,
  title: 'Make Skeleton',
};

const todo9 = {
  checklist: [],
  complete: false,
  description: '',
  dueDate: 1597093200000,
  id: 9,
  notes: '',
  priority: '2',
  projectId: 1,
  title: 'Check List',
};

const todo10 = {
  checklist: [
    { description: 'run npm init', check: true, order: 0 },
    { description: 'npm install webpack webpack-cli --save-dev', check: true, order: 1 },
    { description: 'node_modules in .gitignor', check: false, order: 2 },
    { description: 'src folder', check: false, order: 3 },
    { description: 'dist folder', check: false, order: 4 },
    { description: 'webpack.config.js', check: false, order: 5 },
    { description: 'npm install webpack webpack-cli --save-dev', check: false, order: 6 },
    { description: 'npm install webpack-dev-server --save-dev', check: false, order: 7 },
  ],
  complete: false,
  description: 'run npm init in your project directory',
  dueDate: 1597093200000,
  id: 10,
  notes: 'this is to generate a package.json file',
  order: '0',
  priority: '2',
  projectId: 4,
  title: 'Configure webpack',
};

const todo11 = {
  checklist: [
    { description: '.github/workflows', check: false, order: 0 },
    { description: 'linters.yml', check: false, order: 1 },
    { description: '.eslintrc.json', check: false, order: 2 },
    { description: '.stylelintrc.json', check: false, order: 3 },
  ],
  complete: false,
  description: 'for javascript',
  dueDate: 1597093200000,
  id: 18,
  notes: 'https://github.com/microverseinc/linters-config/tree/master/javascript',
  order: '0',
  priority: '2',
  projectId: 4,
  title: 'Set up linters',
};

const todo12 = {
  checklist: [],
  complete: false,
  description: '',
  dueDate: 1597093200000,
  id: 19,
  notes: 'master↵develop↵feature',
  order: '0',
  priority: '2',
  projectId: 4,
  title: 'git-flow',
};

const todo13 = {
  checklist: [
    { description: 'Products and Services', check: false, order: 0 },
    { description: 'Kitchen view with chefs', check: false, order: 1 },
    { description: 'Outside view', check: false, order: 2 },
  ],
  complete: false,
  description: 'rendering the home page',
  dueDate: 1597093200000,
  id: 20,
  notes: '',
  order: '0',
  priority: '3',
  projectId: 4,
  title: 'Module About',
};

const todo14 = {
  checklist: [
    { description: 'Salads and Appetisers', check: false, order: 0 },
    { description: 'Shelfish', check: false, order: 1 },
    { description: 'Fresh Fish', check: false, order: 2 },
    { description: 'Meat', check: false, order: 3 },
    { description: 'Wine', check: false, order: 4 },
  ],
  complete: false,
  description: 'rendering the products menu',
  dueDate: 1597093200000,
  id: 21,
  notes: 'sections in check list',
  order: '0',
  priority: '3',
  projectId: 4,
  title: 'Module Menu',
};

const todo15 = {
  checklist: [
    { description: 'Contact info', check: false, order: 0 },
    { description: 'Area map', check: false, order: 1 },
  ],
  complete: false,
  description: 'rendering contact details',
  dueDate: 1597093200000,
  id: 22,
  notes: '',
  order: '0',
  priority: '3',
  projectId: 4,
  title: 'Module Contacts',
};

const todo16 = {
  checklist: [],
  complete: false,
  description: 'Navigation to the three modules',
  dueDate: 1597093200000,
  id: 23,
  notes: '',
  order: 7,
  priority: '4',
  projectId: 4,
  title: 'Main Controller',
};

const todo17 = {
  checklist: [],
  complete: false,
  description: 'file seed.js',
  dueDate: 1597093200000,
  id: 24,
  notes: 'runs on load when data is empty',
  order: 8,
  priority: '0',
  projectId: 4,
  title: 'Initial data',
};

const todo18 = {
  checklist: [],
  complete: false,
  description: '',
  dueDate: 1597093200000,
  id: 25,
  notes: '',
  order: 9,
  priority: '0',
  projectId: 4,
  title: 'README',
};


function seed(projDB, todos) {
  projDB.add(project1);
  projDB.add(project2);
  projDB.add(project3);
  projDB.add(project4);
  todos.add(todo1);
  todos.add(todo2);
  todos.add(todo3);
  todos.add(todo4);
  todos.add(todo5);
  todos.add(todo6);
  todos.add(todo7);
  todos.add(todo8);
  todos.add(todo9);
  todos.add(todo10);
  todos.add(todo11);
  todos.add(todo12);
  todos.add(todo13);
  todos.add(todo14);
  todos.add(todo15);
  todos.add(todo16);
  todos.add(todo17);
  todos.add(todo18);
}

export default seed;
