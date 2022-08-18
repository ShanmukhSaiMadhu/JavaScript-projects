getRandomMeal

async function getRandomMeal () {
    const randomMeal = await fetch('www.themealdb.com/api/json/v1/1/random.php')

    console.log(randomMeal)
}

async function getMealById () {
    const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
}

async function getRgetMealsBySearch () {
    const meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + term)
}