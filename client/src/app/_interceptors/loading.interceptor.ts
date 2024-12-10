import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../_services/loader.service';
import { delay, finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { identity } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  loaderService.loading();

  return next(req).pipe(
    (environment.production ? identity : delay(1000)),
    finalize(() => loaderService.idle())
  );
};
