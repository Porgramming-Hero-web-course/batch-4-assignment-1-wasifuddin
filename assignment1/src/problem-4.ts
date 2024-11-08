type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

function calculateShapeArea(shape: Circle | Rectangle): number {
  if (shape.shape === "circle") {
    var area = Math.PI * Math.pow(shape.radius, 2);
    return parseFloat(area.toFixed(2));

  } else if (shape.shape === "rectangle")
     {
    return shape.width * shape.height;
  } else
   {
    throw new Error("Unknown shape");
  }
}

var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

var rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
