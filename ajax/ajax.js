$(() => {
    $.get({
        url: 'https://api.instantwebtools.net/v1/airlines',
        success: (data, index) => {
            const index1 = Math.floor(Math.random() * data.length);
            const index2 = Math.floor(Math.random() * data.length);
            const index3 = Math.floor(Math.random() * data.length);
            const index4 = Math.floor(Math.random() * data.length);
            const index5 = Math.floor(Math.random() * data.length);
            const index6 = Math.floor(Math.random() * data.length);
            // $('#data').text(`Country ${index + 3}: ${data[0].country}`);
            $('.data0').text(`${data[index1].country}`);
            $('.data1').text(`${data[index2].country}`);
            $('.data2').text(`${data[index3].country}`);
            $('.data3').text(`${data[index4].country}`);
            $('.data4').text(`${data[index5].country}`);
            $('.data5').text(`${data[index6].country}`);
            
            $('.head-quarter0').text(`${data[index1].head_quaters}`);
            $('.head-quarter1').text(`${data[index2].head_quaters}`);
            $('.head-quarter2').text(`${data[index3].head_quaters}`);
            $('.head-quarter3').text(`${data[index4].head_quaters}`);
            $('.head-quarter4').text(`${data[index5].head_quaters}`);
            $('.head-quarter5').text(`${data[index6].head_quaters}`);
        },
        error: (error) => {
            console.error('Error fetching data:', error)
        }
    })
})