<template>
  <div class="hello">
    <div class="upperContainer">
      <div>
        <div>
          <span>Color:</span>
          <input type="color" v-model="inputColor" />

          <span style="margin-left: 8px;">Strength:</span>
          <input type="number" v-model="inputStrength" style="width:6em" min="0.000001" step="0.0001"/>
        </div>
        <div>
          <span>send </span> <input type="text" :value="sendAmount" style="width:11em" readonly/> <span> to </span> <input type="text" :value="banAddr" style="width:7em" readonly/>
        </div>
      </div>
      <div class="selectedDetails">
        <span>Weight of selected pixel:</span>
        <span>{{selected==-1?'---':cells[selected].strength}}</span>
      </div>
    </div>
    <!-- <button @click="debug">debug</button> -->

    <div class="gridFitBox">
      <div class="gridContainer" :style="'grid-template-columns:'+' auto'.repeat(width)+';'">
        <div v-for='(cell,cellIndex) in cells' @click="cellClicked(cellIndex)" class="gridSquare" :style="'backgroundColor:'+cell.color+';'+(cellIndex==selected?'border:2px solid green;':'')" :key="cellIndex"></div>
      </div>
    </div>
  </div>
</template>

<script>
const bananojs = require('@bananocoin/bananojs');
bananojs.setBananodeApiUrl('https://kaliumapi.appditto.com/api');
const crypto = require('crypto');

export default {
  name: 'PixelBoard',
  data(){
    let width = 100
    let height = 100
    let cells = [];
    for(let i=0;i<(width*height);i++){
      cells.push({
        color:"rgb(100,100,100)",
        strength: 0
      })
    }
    return {
      banAddr: "ban_1oi5fxzt1t5h9keckenq18j8raapo1njxqdtyyfmed846pph9s8fig7944py",
      cells: cells,
      width: width,
      height: height,
      inputColor: "#0000ff",
      inputStrength: 0.0001,
      interval: undefined,
      selected: -1,
      height: 0
    }
  },
  props: {
    msg: String
  },
  mounted(){
    this.scan()
    if(this.interval != undefined){
      clearInterval(this.interval)
    }
    this.interval = setInterval(this.scan, 5000);
  },
  methods: {
    cellClicked(cell){
      if(cell == this.selected){
        this.selected = -1
      }else{
        this.selected = cell
      }
    },
    async scan(){
      if(this.banAddr != ""){
        this.paint(this.banAddr)
      }

    },

    async paint(addr){
      let transactions = await bananojs.getAccountHistory(addr,-1);
      // console.log(transactions)
      for(let i = transactions.history.length-1; i >= 0 ; i--){
        let trans = transactions.history[i]
        if( (parseInt(trans.height) > this.height) && (trans.type == "receive")){
          this.height = parseInt(trans.height)
          let action = this.decodeTransaction(trans.amount);
          console.log(action)
          if(action != undefined){
            let ind = action.pos[1]*this.width + action.pos[0]
            // console.log(ind)
            let currentCell = this.cells[ind]
            // console.log(currentCell)
            let col = currentCell.color.substr(4,currentCell.color.length-5).split(',')
            let newCol = action.color.substr(4,action.color.length-5).split(',')

            let combined = [
              Math.round(((parseInt(col[0])*parseFloat(currentCell.strength))+(parseInt(newCol[0])*parseFloat(trans.amount_decimal)))/(parseFloat(currentCell.strength)+parseFloat(trans.amount_decimal))),
              Math.round(((parseInt(col[1])*parseFloat(currentCell.strength))+(parseInt(newCol[1])*parseFloat(trans.amount_decimal)))/(parseFloat(currentCell.strength)+parseFloat(trans.amount_decimal))),
              Math.round(((parseInt(col[2])*parseFloat(currentCell.strength))+(parseInt(newCol[2])*parseFloat(trans.amount_decimal)))/(parseFloat(currentCell.strength)+parseFloat(trans.amount_decimal)))
            ]
            // console.log(combined)
            this.cells.splice(ind,1,{color: "rgb("+combined[0]+','+combined[1]+','+combined[2]+")",strength:(parseFloat(currentCell.strength)+parseFloat(trans.amount_decimal))})
          }
        }
      }

    },

    decodeTransaction(n){
      let p = parseInt(n.substr(n.length-2,2))
      if(p>26){
        console.log("invalid prefix")
        return(undefined)
      }
      p = p.toString(3).padStart(3,"0")

      let r = Math.min(parseInt(p[0]+n.substr(n.length-8,2)),255)
      let g = Math.min(parseInt(p[1]+n.substr(n.length-6,2)),255)
      let b = Math.min(parseInt(p[2]+n.substr(n.length-4,2)),255)

      let x = parseInt(n.substr(n.length-14,3))
      let y = parseInt(n.substr(n.length-11,3))

      return({
        pos: [x,y],
        color: "rgb("+r+","+g+","+b+")"
      })

    }
  },
  computed:{
    sendAmount(){
      let cell = this.selected
      if(cell == -1){return 0}
      let x = cell%this.width
      let y = Math.floor(cell/this.width)
      let code = x.toString().padStart(3,"0")+y.toString().padStart(3,"0")
      // console.log([x,y])
      // console.log(code)
      // console.log(this.inputColor)
      let r = parseInt(this.inputColor.substr(1,2),16).toString().padStart(3,"0")
      let g = parseInt(this.inputColor.substr(3,2),16).toString().padStart(3,"0")
      let b = parseInt(this.inputColor.substr(5,2),16).toString().padStart(3,"0")
      // console.log([r,g,b])
      let col = r.substr(1,2)+g.substr(1,2)+b.substr(1,2)+parseInt(r[0]+g[0]+b[0],3).toString().padStart(2,"0")


      code = (code+col)
      // code = "0."+code.padStart(29,"0")
      let q = ""
      let dotIndex = this.inputStrength.toString().indexOf(".")
      if(dotIndex == -1){
        q = this.inputStrength+"."+code.padStart(29,"0")
      }else{
        q = this.inputStrength+code.padStart(29-this.inputStrength.toString().length+(dotIndex+1),"0")
      }
      // let q = this.inputStrength.toString().indexOf(".")
      // console.log(q)
      // console.log(code)
      // alert("send:\n"+q+"\n\nto:\n"+this.banAddr)
      return q
    }
  },
  beforeDestroy(){
    clearInterval(this.interval)
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selectedDetails{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:13em;
  height: 2.5em;
  border: 2px solid rgba(0,0,0,0.5);
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.upperContainer{
  display: flex;
  align-items: center;
  justify-content: center;
}
.gridFitBox{
  width: 100%;
  height: calc(100vh - 100px);
  overflow: scroll;
}
.gridSquare{
  width: 15px;
  height: 15px;
  border: 1px solid rgb(60,60,60);
  box-sizing: border-box;
}
.gridContainer{
  display:grid;
  // flex-wrap: wrap;
  width: 1500px;
}

</style>
