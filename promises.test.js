const fetchPromise = require('./promises')


//this is for resolve
test('the data is peanut butter',()=>{
    return expect(fetchPromise()).resolves.toBe('peanut butter');
})

//this is for reject
test('tthe fetch fails with an error',()=>{
    return expect(fetchPromise()).rejects.toThrow('error')
});

//for the async/await

test('the data is peanut butter',async()=>{
    const data = await fetchPromise();
    expect(data).toBe('peanut butter')
})

//mock functions
test('mock implementation of a basic function', ()=>{
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1)
})

//spying on a method of an object
test('spying on a method of an object',()=>{
    const video = {
        play(){
            return true;
        }
    };
    const spy= jest.spyOn(video,'play');
    video.play();

    expect(spy).toHaveBeenCalledWith();
    spy.mockRestore();
})