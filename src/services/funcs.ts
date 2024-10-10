export const funcs = {
    getBlocksContainerColCount(screenWidth:number){
        if(screenWidth <= 480){
            return 1;
        }
        if(screenWidth <= 768){
            return 2;
        }
        if(screenWidth <= 1024){
            return 3;
        }
        return 4;
    },
}