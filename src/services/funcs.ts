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
        if(screenWidth <= 1280){
            return 4;
        }
        if(screenWidth <= 1536){
            return 6;
        }

        return 8;
    },
}