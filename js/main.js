// Make useState accessible
const { useState } = React;

const App = () => {

    const [myList, setList] = useState([
        {item: "Steaks", qty: 3, cat: "meat"},
    ]);

    return (
      <React.Fragment>
        <header class="header">
            <h1>Shopping List</h1>
        </header>

        <form id="newItem" class="newitem" autocomplete="off">
            <label for="item" class="line-label">New Item</label>
            <div class="addnew">
            <input type="text" name="item" id="item" class="form-component inpt" placeholder="What do you need?" />
            <input type="submit" value="Add" class="form-component btn" />
            </div>
        </form>

        <form id="filterCategories">
            <ul class="filters">
            <li><input type="radio" name="category" value="all" id="filter0" checked /><label for="filter0">all</label></li>
            <li><input type="radio" name="category" value="meat" id="filter1" /><label for="filter1">meat</label></li>
            <li><input type="radio" name="category" value="prod" id="filter2" /><label for="filter2">prod</label></li>
            <li><input type="radio" name="category" value="dairy" id="filter3" /><label for="filter3">dairy</label></li>
            <li><input type="radio" name="category" value="dry" id="filter4" /><label for="filter4">dry</label></li>
            </ul>
        </form>

        <ul id="shoppinglist" class="shoppinglist">
            <li class="meat">
                <button data-id="0" data-step="-1">-</button>
                <span>3 Steaks</span>
                <button data-id="0" data-step="1">+</button>
            </li>
            <li class="prod">
                <button data-id="0" data-step="-1">-</button>
                <span>2 Apples</span>
                <button data-id="0" data-step="1">+</button>
            </li>
            <li class="dairy">
                <button data-id="0" data-step="-1">-</button>
                <span>1 Milk (2L, 2%)</span>
                <button data-id="0" data-step="1">+</button>
            </li>
            <li class="dry">
                <button data-id="0" data-step="-1">-</button>
                <span>4 Mac & Cheese</span>
                <button data-id="0" data-step="1">+</button>
            </li>
        </ul>
      </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));