import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

    {
        path: '',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'home',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'about',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'projects',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'resume',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'games',
        renderMode: RenderMode.Prerender
    }
];