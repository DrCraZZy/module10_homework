let myMap = new Map();

myMap.set("1", "string");
myMap.set("test", null);
myMap.set(true, 14);
myMap.set(12, [4, 5]);

for(const key of myMap.keys()) {
    console.log(`Key: ${key}, Value: ${myMap.get(key)}`);
}











