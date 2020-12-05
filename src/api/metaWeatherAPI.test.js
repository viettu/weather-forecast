// import { getLocations, getWeathers } from "./metaWeatherAPI";
// import { mockLocations, mockWeathers } from "./metaWeatherAPI.data";

// import { getLocations } from "./metaWeatherAPI";
// import { mockLocations } from "./metaWeatherAPI.data";

jest.mock('./metaWeatherAPI')

afterEach(() => {
    jest.clearAllMocks()
})

test('should get locations', async () => {
    // const locations = await getLocations("Houston");
    // console.log(await getLocations());
    // expect(locations.length).toEqual(mockLocations.length);
})

// test('should get weathers', async () => {
//     const locations = await getWeathers("Houston");
//     expect(locations.length).toEqual(mockWeathers.length);
// })
