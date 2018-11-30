FROM nginx:1.15
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/index.html
COPY kata-hello.js /usr/share/nginx/html/kata-hello.js 
RUN chown nginx:nginx /var/cache/nginx/

EXPOSE 80
