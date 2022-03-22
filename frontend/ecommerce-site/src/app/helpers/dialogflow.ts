

export function chatbot_response(intent: string, entity: string): string {
    var response: string = ""

    if (intent == "Product_description") {
        response = intent_prod_description(entity)
    }
    if (intent == "Payment") {
        response = "We accept visas and credit master card as payments. To view old payments:\n 1. Go to Account \n 2. Go to Your Orders \n 3. Find your order and view the payment"
    }
    if (intent == "Connection") {
        response = "All devices can connect to bluetooth or wifi. Laptops and phones can do hotspot tethering."
    }
    if (intent == "Display") {
        response = intent_display(entity)
    }
    if (intent == "Order") {
        response = "Shipping takes 3-5 business days and is shipped through Canada Post.\n To track your order: \n 1. Go to Account \n 2. Go to Your Orders \n 3. Find your order and check the status"
    }
    if (intent == "storage") {
        response = intent_storage(entity)
    }
    if (intent == "Fix") {
        response = "Please contact our technician at 343 567 8976 "
    }
    if (intent == "Charging")
        response = intent_charging(entity)
    return response

}
function intent_charging(entity: string): string {
    var response: string = ""

    if (entity == "Phone") {
        response = "Samsung phones have type C and type A chargers. They can also work with our wireless charging extension device.For more info,Please contact our technician at 343 567 8976"

    }
    if (entity == "Laptop") {
        response = "All our laptops have a 240 V charger. They can stay on while charging and can use each others chargers. We also sell charging adaptors.For more info,Please contact our technician at 343 567 8976"

    }
    if (entity == "Camera") {
        response = "Our cameras can be charged with USB type B or charged wirelessly. Contact our technician for more info"
    }
    if (entity == "Computer") {
        response = "Computers need no charging"
    }


    return response

}
function intent_prod_description(entity: string): string {
    var response: string = ""

    if (entity == "Phone") {
        response = "Our phones are samsung phones. The colors are white and black and the prices range from 200 to 1500 dollars. Please visiti the product page for more details"
    }
    if (entity == "Laptop") {
        response = "We only sell Dell laptops of color white and black. Sizes vary from 12 to 25 inches. Prices range from 500 to 3000 dollars. Please visit the product page for more details."
    }
    if (entity == "Camera") {
        response = "We sell Canon cameras with varying pixels of 16 to 40 px. The colours are white and black. Prices range from 100 to 500 dollars. Please visit the product page for more details."
    }
    if (entity == "Computer") {
        response = "We sell Dell computers of black color only. The prices range from 1500 to 5000 dollars. For more info visit the product page"
    }

    return response
}

function intent_storage(entity: string): string {
    var response: string = ""

    if (entity == "Phone") {
        response = "Phones are compatible with SD memory cards of 8-40 gigabytes. For more details call on 343 988 4493"
    }
    else if (entity == "Laptop") {
        response = "Laptops are compatible with SSD or HDD drives of capacity ranging from 16 GB to 1 terabyte. For more details call on 343 988 4493 "

    }
    else if (entity == "Camera") {
        response = "All of our cameras are compatible with SD memory cards of 8-40 gigabytes. For more details call on 343 988 4493"
    }
    else if (entity == "Computer") {
        response = "All computers are compatible with SSD or HDD drives of capacity ranging from 16 GB to 1 terabyte. For more details call on 343 988 4493"
    }
    else {
        response = "Please call our tech guy at 343 988 4493 for more details"
    }


    return response
}

function intent_display(entity: string): string {
    var response: string = ""

    if (entity == "Phone") {
        response = "The display used in smartphones is AMOLED.Screen sizes vary from 5-10 inches For more details call on 343 988 4493"
    }
    else if (entity == "Laptop") {
        response = "Laptops can have LCD size of 13 to 24 inches.They are compatible with HDMI and VDI.For more details call on 343 988 4493 "

    }
    else if (entity == "Camera") {
        response = "All of our cameras have 16 px lenses and they can relay to lcd screen with HDMI cable. For more details call on 343 988 4493"
    }
    else if (entity == "Computer") {
        response = "Computers have LCD screen size between 16-30 inches and can have multiple screens. For more details call on 343 988 4493"
    }
    else {
        response = "All our devices are compatible with HMDI cables. We have lcd screens of sizes 8 to 40 inches. Please call our tech guy at 343 988 4493 for more details"
    }


    return response
}

function dialog_management(user_input: string) {
    var response = ""
}