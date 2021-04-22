const inputValueText = document.querySelectorAll("label .input-value")
const HshadowInput = document.querySelector("#Hshadow")
const VshadowInput = document.querySelector("#Vshadow")
const blurRadiusInput = document.querySelector("#blur-radius")
const spreadRadiusInput = document.querySelector("#spread-radius")
const colorPickerInput = document.querySelector("#color-picker")
const insetCheckbox = document.querySelector('#inset-checkbox')


HshadowInput.addEventListener('input', ()=>{
    inputValueText[0].innerText = `${HshadowInput.value}px`

    changeBoxShadowInset()
})

VshadowInput.addEventListener('input', ()=>{
    inputValueText[1].innerText = `${VshadowInput.value}px`

    changeBoxShadowInset()
})

blurRadiusInput.addEventListener('input', ()=>{
    inputValueText[2].innerText = `${blurRadiusInput.value}px`

    changeBoxShadowInset()
})

spreadRadiusInput.addEventListener('input', ()=>{
    inputValueText[3].innerText = `${spreadRadiusInput.value}px`

    changeBoxShadowInset()
})

colorPickerInput.addEventListener('input', ()=>{
    inputValueText[4].innerText = `${colorPickerInput.value}`

    changeBoxShadowInset()
})

insetCheckbox.addEventListener('change', ()=>{
    changeBoxShadow(insetCheckbox.checked)
})

function changeBoxShadowInset(){
    if(insetCheckbox.checked){
        changeBoxShadow(true)
    }else{
        changeBoxShadow()
    }
}

function changeBoxShadow(inset){
    const boxContentShadow = document.querySelector('.box-content')
    
    let hShadow = HshadowInput.value
    let vShadow = VshadowInput.value
    let blurSpread = blurRadiusInput.value
    let spreadRadius = spreadRadiusInput.value
    let colorPicker = colorPickerInput.value

    if(inset){
    boxContentShadow.style.boxShadow = `${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset`

    changeTextProperty(true)
    }
    else{
        boxContentShadow.style.boxShadow = `${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker}`

        changeTextProperty()
    }
}

function changeTextProperty(inset){
    const boxPropertyP = document.querySelectorAll('.css-shadow-property p')
    let hShadow = HshadowInput.value
    let vShadow = VshadowInput.value
    let blurSpread = blurRadiusInput.value
    let spreadRadius = spreadRadiusInput.value
    let colorPicker = colorPickerInput.value

    if(inset){
        boxPropertyP[0].innerHTML = `-webkit-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset;`
        boxPropertyP[1].innerHTML = `-moz-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset;`
        boxPropertyP[2].innerHTML = `box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset;`
    }else{
        boxPropertyP[0].innerHTML = `-webkit-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker};`
        boxPropertyP[1].innerHTML = `-moz-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker};`
        boxPropertyP[2].innerHTML = `box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker};`
    }
}

new ClipboardJS('.btn')


