import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export abstract class List<T, K> {
    list: T[] = [];
    loading: boolean = false;
    configTable!: any;

    constructor(
        protected service: K,
        configTable: any,
    ) {
        this.configTable = configTable;
    }


    ngAfterViewInit() {
        this.loadData();
    }

    loadData() {
        // this.progressBarService.changeProgressBar(true);
        // this.loading = true;
        // this.service.findAll().subscribe({
        //     next: (result: T[]) => {
        //         this.list = deepClone(result);
        //         this.loading = false;
        //     },
        //     error: (error: ErrorResponseData) => {
        //         this.progressBarService.changeProgressBar(false);
        //         this.loading = false;
        //     }
        // });
    }

}
