let currentState = welcoming;

let orderItems = [];
let currentItem = "";
let currentSize = "";
let currentAttr = "";

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;
  orderItems = [];
  currentItem = "";
  currentSize = "";
  currentAttr = "";
}

function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to Dream Takeout.");
  aReturn.push("Menu: chicken fried rice, beef fried rice, egg fried rice.");
  aReturn.push("What would you like to order?");

  return aReturn;
}

function choosingItem(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.includes("chicken fried rice")) {
    currentItem = "Chicken Fried Rice";
  }
  else if (input.includes("beef fried rice")) {
    currentItem = "Beef Fried Rice";
  }
  else if (input.includes("egg fried rice")) {
    currentItem = "Egg Fried Rice";
  }
  else if (input.includes("oolong tea")) {
    currentItem = "Oolong Tea";
  }
  else if (input.includes("milk tea")) {
    currentItem = "Taiwanese Milk Tea";
  }
  else {
    aReturn.push("Sorry, we don't have that.");
    return aReturn;
  }

  currentState = choosingSize;
  aReturn.push(`What size would you like for ${currentItem}? (small, medium, big)`);

  return aReturn;
}

function choosingSize(sInput) {
  let aReturn = [];
  currentSize = sInput.toLowerCase();

  if (currentItem.includes("Rice")) {
    currentState = choosingAttr;
    aReturn.push("Would you like extra egg? (yes or no)");
  } 
  else {
    currentState = choosingAttr;
    aReturn.push("Ice or no ice?");
  }

  return aReturn;
}

function choosingAttr(sInput) {
  let aReturn = [];
  currentAttr = sInput.toLowerCase();

  orderItems.push(`${currentItem} (${currentSize}, ${currentAttr})`);

  aReturn.push(`${currentItem} added to your order.`);

  if (currentItem.includes("Rice")) {
    currentState = upsellDrink;
    aReturn.push("Would you like a drink? We have oolong tea or taiwanese milk tea.");
  } else {
    currentState = anotherItem;
    aReturn.push("Would you like anything else?");
  }

  return aReturn;
}

function upsellDrink(sInput) {
  let aReturn = [];
  let input = sInput.toLowerCase();

  if (input.startsWith("y")) {
    currentState = choosingItem;
    aReturn.push("What drink would you like?");
  } else {
    currentState = finishing;
    aReturn.push("Your order:");
    aReturn.push(orderItems.join(", "));
    aReturn.push("Thank you for ordering!");
  }

  return aReturn;
}

function anotherItem(sInput) {
  let aReturn = [];

  if (sInput.toLowerCase().startsWith("y")) {
    currentState = choosingItem;
    aReturn.push("What else would you like?");
  } else {
    currentState = finishing;
    aReturn.push("Your order:");
    aReturn.push(orderItems.join(", "));
    aReturn.push("Thank you for ordering!");
  }

  return aReturn;
}

function finishing() {
  let aReturn = [];
  currentState = welcoming;

  aReturn.push("Order complete.");

  return aReturn;
}