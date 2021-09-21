//first make an array of animation stages
const animationFrames = ['\r| ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
//now use a for loop to iterate the setTimout
for (let i = 0; i < animationFrames.length; i++){
  setTimeout (() => {
    process.stdout.write(animationFrames[i])
  }, 100 + (i * 100))
};
