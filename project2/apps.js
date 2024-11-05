let data = [
{
    name: 'Winston Schmidt',
    age: '42'
},
{
    name: 'Jessica Day',
    age: '42'
},
{
    name: 'Nick Miller',
    age: '43'
},
{
    name: 'Cece Parekh',
    age: '42'
},
{
    name: 'Winston Bishop',
    age: '42'
},
{
    name: 'Reagan Lucas',
    age: '40'
}
];


const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join(`\n`);