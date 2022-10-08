import{createRouter , createWebHistory} from "vue-router";
import Home from "../page/Home.vue"
import About from "../page/About.vue"
import Project from "../page/Project.vue"
import contact from "../page/contact.vue"
const routes = [{
    path : "/",
    component : Home , 
    name:"Home",
},{
    path : "/about",
    component : About , 
    name:"About",
},{
    path : "/project",
    component : Project , 
    name:"Project",
},{
    path : "/contact",
    component : contact , 
    name:"contact",
}]
const router = createRouter({
    history: createWebHistory (),
    linkActiveClass: "active",
    scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
    return {
    selector: to.hash,
    behavior: 'smooth'
    };
    } 
    return { x: 0, y: 0 }; 
},
    routes,
});

export default router;