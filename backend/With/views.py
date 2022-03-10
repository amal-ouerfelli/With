from django.http import JsonResponse
from With.models import User, Profile
from With.serializers import ProfileSerializer, UserSerializer
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET','POST'])
def Users(request):
    if (request.method=="GET"):
        users=User.objects.all()
        usersData=UserSerializer(users, many=True)
        return JsonResponse(usersData.data, safe=False)
    elif (request.method=="POST"):
        serializers=UserSerializer(data=request.data) #serialisation des données saisies
        if (serializers.is_valid()):
            serializers.save()
            return JsonResponse(serializers.data) # retourne reponse json 

    return JsonResponse(serializers.errors)
@api_view(['GET'])
def ProfileById(request, pk):
    print(pk)
    if (request.method=="GET"):
        profile=Profile.objects.get(idProfile=pk)
        profileData=ProfileSerializer(profile)
        user=UserSerializer(User.objects.get(id=profileData.data['user'])).data

        return JsonResponse({"user": user, "profile": profileData.data}, safe=False)

@api_view(['GET','POST'])
def Profiles(request):
    if (request.method=="GET"):
        profiles=Profile.objects.all()
        if('Gender' in request.GET ):
            profiles=profiles.intersection(Profile.objects.filter(Gender=request.GET['Gender']))
        if(('HomeTown' in request.GET) ):
            profiles=profiles.intersection(Profile.objects.filter(HomeTown=request.GET['HomeTown']))
        if('MinAge' in request.GET):
            profiles=profiles.intersection(Profile.objects.filter(Age__gte=request.GET['MinAge']))
        if('MaxAge' in request.GET):
            profiles=profiles.intersection(Profile.objects.filter(Age__lte=request.GET['MaxAge']))
        profilesData=ProfileSerializer(profiles, many=True)
        for profile in profilesData.data:
            profile['user']=UserSerializer(User.objects.get(id=profile['user'])).data
        return JsonResponse(profilesData.data, safe=False)
    elif (request.method=="POST"):
        serializers=ProfileSerializer(data=request.data) #serialisation des données saisies
        if (serializers.is_valid()):
            serializers.save()
    return JsonResponse(serializers.data) # retourne reponse json 


