const boxContentShadow = document.querySelector('.box-content')

const inputShadowText = document.querySelectorAll("label .input-value")
const HshadowInput = document.querySelector("#Hshadow")
const VshadowInput = document.querySelector("#Vshadow")
const blurRadiusInput = document.querySelector("#blur-radius")
const spreadRadiusInput = document.querySelector("#spread-radius")
const colorPickerInput = document.querySelector("#color-picker")
const insetCheckbox = document.querySelector('#inset-checkbox')

const inputBorderText = document.querySelectorAll('label .border-value')
const Allborder = document.querySelector('#Allborder')
const TLborderInput = document.querySelector('#TLborder') // top-left BORDER
const TRborderInput = document.querySelector('#TRborder') // top-right BORDER
const BLborderInput = document.querySelector('#BLborder') // bottom-left BORDER
const BRborderInput = document.querySelector('#BRborder') // bottom-right BORDER


// SHADOW BOX INPUTS CHANGES

HshadowInput.addEventListener('input', ()=>{
    inputShadowText[0].innerText = `${HshadowInput.value}px`

    changeBoxShadowInset()
})

VshadowInput.addEventListener('input', ()=>{
    inputShadowText[1].innerText = `${VshadowInput.value}px`

    changeBoxShadowInset()
})

blurRadiusInput.addEventListener('input', ()=>{
    inputShadowText[2].innerText = `${blurRadiusInput.value}px`

    changeBoxShadowInset()
})

spreadRadiusInput.addEventListener('input', ()=>{
    inputShadowText[3].innerText = `${spreadRadiusInput.value}px`

    changeBoxShadowInset()
})

colorPickerInput.addEventListener('input', ()=>{
    inputShadowText[4].innerText = `${colorPickerInput.value}`

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

// BORDER RADIUS INPUTS CHANGES

Allborder.addEventListener('input',()=>{
    for(let n in inputBorderText){
        inputBorderText[n].innerText = `${Allborder.value}px`
    }

    boxContentShadow.style.borderRadius = `${Allborder.value}px`

    TLborderInput.value = Allborder.value
    TRborderInput.value = Allborder.value
    BLborderInput.value = Allborder.value
    BRborderInput.value = Allborder.value

    changeTextProperty()
})

TLborderInput.addEventListener('input', ()=>{
    inputBorderText[0].innerText = `${TLborderInput.value}px`

    changeBorderRadius()
})

TRborderInput.addEventListener('input', ()=>{
    inputBorderText[1].innerText = `${TRborderInput.value}px`

    changeBorderRadius()
})

BLborderInput.addEventListener('input', ()=>{
    inputBorderText[2].innerText = `${BLborderInput.value}px`

    changeBorderRadius()
})

BRborderInput.addEventListener('input', ()=>{
    inputBorderText[3].innerText = `${BRborderInput.value}px`

    changeBorderRadius()
})



function changeBorderRadius(){
    boxContentShadow.style.borderRadius = `${TLborder.value}px ${TRborder.value}px ${BLborder.value}px ${BRborder.value}px`

    changeTextProperty()
}

function changeTextProperty(inset){
    const boxShadowProperty = document.querySelector('.css-shadow-property')
    const cssBorderPropertyText = document.querySelector('.css-border-property')
    let hShadow = HshadowInput.value
    let vShadow = VshadowInput.value
    let blurSpread = blurRadiusInput.value
    let spreadRadius = spreadRadiusInput.value
    let colorPicker = colorPickerInput.value

    if(inset){
        boxShadowProperty.innerHTML = `
            -webkit-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset;<br/>
            -moz-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset;<br/>
            box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker} inset;
        `
    }else{
        boxShadowProperty.innerHTML = `
            -webkit-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker};<br/>
            -moz-box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker};<br/>
            box-shadow: ${hShadow}px ${vShadow}px ${blurSpread}px ${spreadRadius}px ${colorPicker};
        `
    }

    cssBorderPropertyText.innerHTML = `
        -webkit-border-radius: ${TLborderInput.value}px ${TRborderInput.value}px ${BLborderInput.value}px ${BRborderInput.value}px;<br>
        -moz-border-radius: ${TLborderInput.value}px ${TRborderInput.value}px ${BLborderInput.value}px ${BRborderInput.value}px;<br>
        border-radius: ${TLborderInput.value}px ${TRborderInput.value}px ${BLborderInput.value}px ${BRborderInput.value}px;
    `
}

new ClipboardJS('.btn')


