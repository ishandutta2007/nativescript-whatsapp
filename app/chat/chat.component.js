"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ChatComponent = (function () {
    function ChatComponent(router) {
        var _this = this;
        this.router = router;
        this.router.params
            .forEach(function (params) { _this.id = +params['id']; });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.mockChat = [{
                "id": 1,
                "nombre": "Grupo de chat de nativeScript",
                "usuarios": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano2",
                    "usuario_3": "jorgeucano3"
                },
                "creacion": "12/12/2016",
                "dialogo": [
                    {
                        "date": "12/12/2016",
                        "texto": "Hola alguien vio la clase?",
                        "usuario": "jorgeucano",
                        "recibio": {
                            "usuario_1": "jorgeucano2",
                            "usuario_2": "jorgeucano3"
                        }
                    },
                    {
                        "date": "12/12/2016",
                        "texto": "si yo estuvo genial",
                        "usuario": "jorgeucano2",
                        "recibio": {
                            "usuario_1": "jorgeucano",
                            "usuario_2": "jorgeucano3"
                        }
                    }
                ]
            }];
    };
    ChatComponent.prototype.addText = function () {
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        templateUrl: 'chat/chat.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFLakQsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixNQUFzQjtRQUExQyxpQkFHQztRQUhtQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDVCxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUksS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUNiLElBQUksRUFBRSxDQUFDO2dCQUNQLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFVBQVUsRUFBRTtvQkFDUixXQUFXLEVBQUUsWUFBWTtvQkFDekIsV0FBVyxFQUFFLGFBQWE7b0JBQzFCLFdBQVcsRUFBRSxhQUFhO2lCQUM3QjtnQkFDRCxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixPQUFPLEVBQUUsNEJBQTRCO3dCQUNyQyxTQUFTLEVBQUUsWUFBWTt3QkFDdkIsU0FBUyxFQUFFOzRCQUNQLFdBQVcsRUFBRSxhQUFhOzRCQUMxQixXQUFXLEVBQUUsYUFBYTt5QkFDN0I7cUJBQ0o7b0JBQ0Q7d0JBQ0ksTUFBTSxFQUFFLFlBQVk7d0JBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFNBQVMsRUFBRSxhQUFhO3dCQUN4QixTQUFTLEVBQUU7NEJBQ1AsV0FBVyxFQUFFLFlBQVk7NEJBQ3pCLFdBQVcsRUFBRSxhQUFhO3lCQUM3QjtxQkFDSjtpQkFDSjthQUNKLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwrQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBSzhCLHVCQUFjO0dBSmpDLGFBQWEsQ0ErQ3pCO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnY2hhdC9jaGF0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50e1xuICAgIGlkOm51bWJlcjtcbiAgICBtb2NrQ2hhdDphbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogQWN0aXZhdGVkUm91dGUpe1xuICAgICAgICB0aGlzLnJvdXRlci5wYXJhbXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKT0+e3RoaXMuaWQgPSArcGFyYW1zWydpZCddfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5tb2NrQ2hhdCA9IFt7XG4gICAgICAgICAgICBcImlkXCI6IDEsIFxuICAgICAgICAgICAgXCJub21icmVcIjogXCJHcnVwbyBkZSBjaGF0IGRlIG5hdGl2ZVNjcmlwdFwiLFxuICAgICAgICAgICAgXCJ1c3Vhcmlvc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vMlwiLFxuICAgICAgICAgICAgICAgIFwidXN1YXJpb18zXCI6IFwiam9yZ2V1Y2FubzNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY3JlYWNpb25cIjogXCIxMi8xMi8yMDE2XCIsXG4gICAgICAgICAgICBcImRpYWxvZ29cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTIvMTIvMjAxNlwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRvXCI6IFwiSG9sYSBhbGd1aWVuIHZpbyBsYSBjbGFzZT9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXCI6IFwiam9yZ2V1Y2Fub1wiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY2liaW9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTIvMTIvMjAxNlwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRvXCI6IFwic2kgeW8gZXN0dXZvIGdlbmlhbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9cIjogXCJqb3JnZXVjYW5vMlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY2liaW9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzFcIjogXCJqb3JnZXVjYW5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMlwiOiBcImpvcmdldWNhbm8zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfV07XG5cbiAgICB9XG5cbiAgICBhZGRUZXh0KCl7XG4gICAgICAgIFxuICAgIH1cblxufSJdfQ==