/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: {
    big: 50,
    small: 24,
  },
  color: "grey",
  pocketNum: 15,

  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  newVolume: function (bigvolume, smallvolume) {
    this.volume.big = bigvolume;
    this.volume.small = smallvolume;
  },
};
console.log("The backpack object:", backpack);
console.log("big before:", backpack.volume.big);

backpack.newVolume(80, 10);
console.log("big after:", backpack.volume.big);
