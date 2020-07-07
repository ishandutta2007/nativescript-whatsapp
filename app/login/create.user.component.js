"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var CreateUserComponent = (function () {
    function CreateUserComponent(routerExt) {
        this.routerExt = routerExt;
    }
    CreateUserComponent.prototype.create = function () {
        var _this = this;
        firebase.createUser({
            email: this.email,
            password: this.password
        }).then(function (result) {
            _this.routerExt.navigate(["/chatListado"], {
                transition: {
                    name: "flip",
                    duration: 500,
                    curve: "linear"
                }
            });
        }, function (errorMessage) {
            alert('error: ' + errorMessage);
        });
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    core_1.Component({
        selector: 'create-user',
        template: "\n                <StackLayout>\n                    <Label class=\"titulo\" text=\"Create User\"></Label>\n                    <TextField hint=\"Email\" keyboardType=\"text\" [(ngModel)]=\"email\"\n                        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n                    <TextField hint=\"Password\" secure=\"true\" [(ngModel)]=\"password\"\n                        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n                    <Button class=\"submit-botton\" (tap)=\"create()\" text=\"Crear usuario\"></Button>\n                </StackLayout>\n        ",
        styleUrls: ['login/login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CreateUserComponent);
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnVzZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLHNEQUErRDtBQUUvRCx1REFBMEQ7QUFnQjFELElBQWEsbUJBQW1CO0lBSzVCLDZCQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7SUFFL0Msb0NBQU0sR0FBTjtRQUFBLGlCQW1CQztRQWxCRyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hCLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztZQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFDLE1BQU07WUFDSCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFDO2dCQUNyQyxVQUFVLEVBQUM7b0JBQ1AsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFDLEdBQUc7b0JBQ1osS0FBSyxFQUFDLFFBQVE7aUJBQ2pCO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUNELFVBQUMsWUFBWTtZQUNULEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUNKLENBQUM7SUFFTixDQUFDO0lBQ1QsMEJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLG1CQUFtQjtJQWQvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFDLGFBQWE7UUFDdEIsUUFBUSxFQUFDLDZtQkFTSjtRQUNMLFNBQVMsRUFBQyxDQUFDLDJCQUEyQixDQUFDO0tBQzFDLENBQUM7cUNBTWlDLHlCQUFnQjtHQUx0QyxtQkFBbUIsQ0EyQi9CO0FBM0JZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonY3JlYXRlLXVzZXInLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInRpdHVsb1wiIHRleHQ9XCJDcmVhdGUgVXNlclwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsXCIga2V5Ym9hcmRUeXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIFsobmdNb2RlbCldPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJzdWJtaXQtYm90dG9uXCIgKHRhcCk9XCJjcmVhdGUoKVwiIHRleHQ9XCJDcmVhciB1c3VhcmlvXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgYCxcbiAgICBzdHlsZVVybHM6Wydsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlVXNlckNvbXBvbmVudHtcblxuICAgIGVtYWlsOnN0cmluZztcbiAgICBwYXNzd29yZDpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dDogUm91dGVyRXh0ZW5zaW9ucyApe31cblxuICAgICAgICBjcmVhdGUoKXtcbiAgICAgICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgICAgIGVtYWlsOnRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW1wiL2NoYXRMaXN0YWRvXCJdLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yTWVzc2FnZSk9PntcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yOiAnICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbn0iXX0=