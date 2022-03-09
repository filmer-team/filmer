from django.urls import path, re_path

from . import views

urlpatterns = [
    path('random_movie', views.RandomMovieView.as_view(), name='random_movie'),
    path('movie/<int:movie_id>', views.MovieInfoView.as_view(),  name='movie_info')
]