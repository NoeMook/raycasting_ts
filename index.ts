type Dim = {nRow: number, nCol: number};

class CanvasApp {
    private canvas: HTMLCanvasElement | null;
    private ctx: CanvasRenderingContext2D | null;
    public dim: Dim;

    constructor() {
        let canvas = document.getElementById('raycast') as HTMLCanvasElement;
        let ctx = canvas.getContext("2d");
        this.dim = {nRow: 7, nCol: 7};
        ctx.lineWidth = 0.05;
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        
        this.canvas = canvas;
        this.ctx = ctx;
        
        this.ctx.scale(
            canvas.height / this.dim.nCol, 
            canvas.width / this.dim.nRow,
        );
        this.drawGrid(this.dim);
        
    }
    
    private drawGrid(dim: Dim) {
        for (let iRow = 0; iRow <= dim.nRow; iRow++) {
            this.ctx.moveTo(0, iRow);
            this.ctx.lineTo(this.canvas.width, iRow);
            this.ctx.stroke();
        }
        for (let iCol= 0; iCol <= dim.nCol; iCol++) {
            this.ctx.moveTo(iCol, 0);
            this.ctx.lineTo(iCol, this.canvas.height);
            this.ctx.stroke();
        }
    }
}