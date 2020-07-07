"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var ChatListadoComponent = (function () {
    function ChatListadoComponent(routerExt, ngZone) {
        var _this = this;
        this.routerExt = routerExt;
        this.ngZone = ngZone;
        this.mockChat = [];
        firebase.addChildEventListener(function (result) {
            _this.ngZone.run(function () {
                _this.onQueryEvent(result);
            });
        }, "/chats");
    }
    ChatListadoComponent.prototype.newChat = function () {
        firebase.push('/chats', {
            "id": 3,
            "nombre": "nuevo grupo con boton",
            "usuarios": {
                "usuario_1": "jorgeucano",
                "usuario_2": "jorgeucano2"
            },
            "creacion": "12/12/2016",
            "dialogo": []
        }).then(function (result) {
            console.log("created key: " + result.key);
        });
    };
    ChatListadoComponent.prototype.onQueryEvent = function (result) {
        console.log("Event type: " + result.type);
        console.log("Key: " + result.key);
        console.log("Value: " + JSON.stringify(result.value));
        if (result) {
            if (result.error) {
                console.dir("error");
            }
            else if (result.value) {
                this.mockChat.push(result.value);
            }
        }
    };
    ChatListadoComponent.prototype.ngOnInit = function () {
    };
    ChatListadoComponent.prototype.elegirChat = function (id) {
        this.routerExt.navigate(["/chat", id]);
    };
    return ChatListadoComponent;
}());
ChatListadoComponent = __decorate([
    core_1.Component({
        selector: 'chat-listado',
        templateUrl: 'chats/listado.component.html',
        styleUrls: ['chats/listado.component.css']
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, core_1.NgZone])
], ChatListadoComponent);
exports.ChatListadoComponent = ChatListadoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YWRvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QsdURBQTBEO0FBTzFELElBQWEsb0JBQW9CO0lBUTdCLDhCQUFvQixTQUEyQixFQUFVLE1BQWM7UUFBdkUsaUJBUUM7UUFSbUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnZFLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFJckIsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFVBQUMsTUFBVTtZQUN0QyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFHRCxzQ0FBTyxHQUFQO1FBQ0ksUUFBUSxDQUFDLElBQUksQ0FDVCxRQUFRLEVBQ1I7WUFDSSxJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsVUFBVSxFQUFFO2dCQUNSLFdBQVcsRUFBRSxZQUFZO2dCQUN6QixXQUFXLEVBQUUsYUFBYTthQUM3QjtZQUNELFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQ0osQ0FBQyxJQUFJLENBQ0YsVUFBVSxNQUFNO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUdELDJDQUFZLEdBQVosVUFBYSxNQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ1AsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBSUQsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBRTtRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxjQUFjO1FBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDN0MsQ0FBQztxQ0FTaUMseUJBQWdCLEVBQWtCLGFBQU07R0FSOUQsb0JBQW9CLENBK0RoQztBQS9EWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J2NoYXQtbGlzdGFkbycsXG4gICAgdGVtcGxhdGVVcmw6ICdjaGF0cy9saXN0YWRvLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY2hhdHMvbGlzdGFkby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdExpc3RhZG9Db21wb25lbnR7XG5cbiAgICBlbWFpbDpzdHJpbmc7XG4gICAgcGFzc3dvcmQ6c3RyaW5nO1xuXG5cbiAgICBtb2NrQ2hhdDpBcnJheTxhbnk+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSApe1xuICAgICAgICBcbiAgICAgICAgZmlyZWJhc2UuYWRkQ2hpbGRFdmVudExpc3RlbmVyKChyZXN1bHQ6YW55KT0+e1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUXVlcnlFdmVudChyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIFwiL2NoYXRzXCIpO1xuXG4gICAgfVxuXG5cbiAgICBuZXdDaGF0KCl7XG4gICAgICAgIGZpcmViYXNlLnB1c2goXG4gICAgICAgICAgICAnL2NoYXRzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDMsIFxuICAgICAgICAgICAgICAgIFwibm9tYnJlXCI6IFwibnVldm8gZ3J1cG8gY29uIGJvdG9uXCIsXG4gICAgICAgICAgICAgICAgXCJ1c3Vhcmlvc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18xXCI6IFwiam9yZ2V1Y2Fub1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMlwiOiBcImpvcmdldWNhbm8yXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY3JlYWNpb25cIjogXCIxMi8xMi8yMDE2XCIsXG4gICAgICAgICAgICAgICAgXCJkaWFsb2dvXCI6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgb25RdWVyeUV2ZW50KHJlc3VsdDphbnkpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50IHR5cGU6IFwiICsgcmVzdWx0LnR5cGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIktleTogXCIgKyByZXN1bHQua2V5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYWx1ZTogXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKTtcbiAgICAgICAgaWYocmVzdWx0KXtcbiAgICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2NrQ2hhdC5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgbmdPbkluaXQoKXtcbiAgICB9XG5cbiAgICBlbGVnaXJDaGF0KGlkKXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2NoYXRcIiwgaWRdKTtcbiAgICB9XG5cbn0iXX0=