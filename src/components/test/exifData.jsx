const lat = {
  1: "N",
  2: [
    [48, 1],
    [9, 1],
    [265212, 10000],
  ],
};

export const parseLat = (exif) => {
  const newLat = [];
  try {
    newLat.push(exif[2][0][0]);
    newLat.push(exif[2][1][0]);
    newLat.push(exif[2][2][0] / exif[2][2][1]);
    return newLat;
  } catch (error) {
    return null;
  }
};

export const parseLong = (exif) => {
  const newLong = [];
  try {
    newLong.push(exif[4][0][0]);
    newLong.push(exif[4][1][0]);
    newLong.push(exif[4][2][0] / exif[4][2][1]);
    return newLong;
  } catch (error) {
    return null;
  }
};

const parsedLat = parseLat(lat);

export const ConvertDMS = (days, minutes, seconds, direction) => {
  try {
    var dd = days + minutes / 60 + seconds / (60 * 60);
    dd = parseFloat(dd);
    if (direction === "S" || direction === "W") {
      dd *= -1;
    }
    return dd;
  } catch (error) {
    return null;
  }
};

const result = ConvertDMS(parsedLat[0], parsedLat[1], parsedLat[2], lat[1]);

var b = result.toString().substring(0, result.toString().indexOf(".") + 6);
